<script>
  import InputItem from "./copmonents/input-item/InputItem.svelte";
  import FullList from "./copmonents/list/FullList.svelte";
  import ListInfo from "./copmonents/list-info/ListInfo.svelte";
  import "./app.css";

  import { addElement, handleSort, handleDelete } from "./app/utils.js";
  import { onMount } from "svelte";

  let todoList = [];
  let id = 0;
  let inputText;
  let sortCount = 1;

  function setTodo(arr) {
    todoList = arr;
  }

  onMount(() => {
    let cameraStatus = false;

    const SUPPORTS_MEDIA_DEVICES = "mediaDevices" in navigator;

    if (SUPPORTS_MEDIA_DEVICES) {
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        const cameras = devices.filter(
          (device) => device.kind === "videoinput"
        );

        if (cameras.length === 0) {
          throw "No camera found on this device.";
        }
        const camera = cameras[cameras.length - 1];

        navigator.mediaDevices
          .getUserMedia({
            video: {
              deviceId: camera.deviceId,
              facingMode: ["user", "environment"],
              height: { ideal: 1080 },
              width: { ideal: 1920 },
            },
          })
          .then((stream) => {
            const track = stream.getVideoTracks()[0];

            const imageCapture = new ImageCapture(track);
            const photoCapabilities = imageCapture
              .getPhotoCapabilities()
              .then(() => {
                const btn = document.querySelector(".switch");
                btn.addEventListener("click", function () {
                  track.applyConstraints({
                    advanced: [{ torch: !cameraStatus }],
                  });
                  cameraStatus = !cameraStatus;
                });
              });
          });
      });
    }
  });

  //The light will be on as long the track exists
</script>

<main>
  <h1>TODO APP</h1>
  <button class="switch">On / Off</button>

  <InputItem {inputText} {addElement} {id} {todoList} {setTodo} />

  {#if todoList.length > 0}
    <ListInfo {sortCount} {todoList} {handleSort} {setTodo} />
  {/if}

  <FullList {todoList} {handleDelete} {setTodo} />
</main>
