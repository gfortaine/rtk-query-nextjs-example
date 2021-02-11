// https://codesandbox.io/s/fetch-based-file-download-0kxod?file=/src/index.js:158-194

import { useGetFileMutation } from "../services/file";

export default function Home() {
  const [getFile] = useGetFileMutation();

  const doFetchDownload = () => {
    getFile(1).unwrap().then(url => {
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      // the filename you want
      a.download = "todo-1.json";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      alert("your file has downloaded!"); // or you know, something with better UX...
    })
  };

  return (
    <div className="App">
      <button onClick={doFetchDownload}>Do Fetch Download</button>
    </div>
  );
}

