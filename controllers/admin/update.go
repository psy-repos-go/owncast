package admin

import (
	"io"
	"net/http"
	"os"
	"os/exec"

	"github.com/owncast/owncast/controllers"
	log "github.com/sirupsen/logrus"
)

func AutoUpdateOptions(w http.ResponseWriter, r *http.Request) {
	type autoUpdateOptionsResponse struct {
		SupportsUpdate bool `json:"supportsUpdate"`
		CanRestart     bool `json:"canRestart"`
	}
}

func AutoUpdateStart(w http.ResponseWriter, r *http.Request) {
	// if !requirePOST(w, r) {
	// 	return
	// }
	w.Header().Set("Content-Type", "text/plain")

	updater, err := downloadInstaller()
	if err != nil {
		log.Errorln(err)
	}

	cmd := exec.Command("bash", updater)
	pipeReader, pipeWriter := io.Pipe()
	cmd.Stdout = pipeWriter
	cmd.Stderr = pipeWriter
	go io.Copy(w, pipeReader)

	if err != nil {
		log.Errorln(err)
		controllers.WriteSimpleResponse(w, false, "unable to update: "+err.Error())
		return
	}

	cmd.Run()
	pipeWriter.Close()
}

func AutoUpdateForceQuit(w http.ResponseWriter, r *http.Request) {
	log.Warnln("Owncast is exiting due to request.")
	go func() {
		os.Exit(0)
	}()
	controllers.WriteSimpleResponse(w, true, "forcing quit")
}

func downloadInstaller() (string, error) {
	installer := "https://owncast.online/install.sh"
	out, err := os.CreateTemp(os.TempDir(), "updater.sh")
	if err != nil {
		log.Errorln(err)
		return "", err
	}
	defer out.Close()

	// Get the data
	resp, err := http.Get(installer)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	// Write the body to file
	_, err = io.Copy(out, resp.Body)
	if err != nil {
		return "", err
	}

	return out.Name(), nil
}

// func isRunningInContainer() bool {
// 	return false
// }

// func isRunningUnderSystemD() bool {
// 	return false
// }

// func GetContainerID(pid int32) string {
// 	return getContainerID(cgroupPath)
// }

// func getContainerID() string {
// 	pid := os.Getppid()
// 	cgroupPath := fmt.Sprintf("/proc/%s/cgroup", strconv.Itoa(int(pid)))
// 	containerID := ""
// 	content, err := ioutil.ReadFile(cgroupPath)
// 	if err != nil {
// 		return containerID
// 	}
// 	lines := strings.Split(string(content), "\n")
// 	for _, line := range lines {
// 		field := strings.Split(line, ":")
// 		if len(field) < 3 {
// 			continue
// 		}
// 		cgroup_path := field[2]
// 		if len(cgroup_path) < 64 {
// 			continue
// 		}
// 		// Non-systemd Docker
// 		//5:net_prio,net_cls:/docker/de630f22746b9c06c412858f26ca286c6cdfed086d3b302998aa403d9dcedc42
// 		//3:net_cls:/kubepods/burstable/pod5f399c1a-f9fc-11e8-bf65-246e9659ebfc/9170559b8aadd07d99978d9460cf8d1c71552f3c64fefc7e9906ab3fb7e18f69
// 		pos := strings.LastIndex(cgroup_path, "/")
// 		if pos > 0 {
// 			id_len := len(cgroup_path) - pos - 1
// 			if id_len == 64 {
// 				//p.InDocker = true
// 				// docker id
// 				containerID = cgroup_path[pos+1 : pos+1+64]
// 				// logs.Debug("pid:%v in docker id:%v", pid, id)
// 				return containerID
// 			}
// 		}
// 		// systemd Docker
// 		//5:net_cls:/system.slice/docker-afd862d2ed48ef5dc0ce8f1863e4475894e331098c9a512789233ca9ca06fc62.scope
// 		docker_str := "docker-"
// 		pos = strings.Index(cgroup_path, docker_str)
// 		if pos > 0 {
// 			pos_scope := strings.Index(cgroup_path, ".scope")
// 			id_len := pos_scope - pos - len(docker_str)
// 			if pos_scope > 0 && id_len == 64 {
// 				containerID = cgroup_path[pos+len(docker_str) : pos+len(docker_str)+64]
// 				return containerID
// 			}
// 		}
// 	}
// 	return containerID
// }
