let theEditor;
const UploadAdapter = /** @class */ (function () {
  function UploadAdapter(loader) {
    this.loader = loader;
  }
  UploadAdapter.prototype.upload = function () {
    const _this = this;
    return this.loader.file.then(function (file) {
      return new Promise(function (resolve, reject) {
        _this._initRequest();
        _this._initListeners(resolve, reject, file);
        _this._sendRequest(file);
      });
    });
  };
  UploadAdapter.prototype._initRequest = function () {
    const xhr = (this.xhr = new XMLHttpRequest());
    no_submit();
    xhr.open('POST', 'https://won-yang.com/api/image/upload', true);
    xhr.responseType = 'json';
  };
  UploadAdapter.prototype._initListeners = function (resolve, reject, file) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = '파일을 업로드 할 수 없습니다.';
    xhr.addEventListener('error', function () {
      reject(genericErrorText);
    });
    xhr.addEventListener('abort', function () {
      return reject();
    });
    xhr.addEventListener('load', function () {
      const response = xhr.response;
      if (!response || response.error) {
        return reject(response && response.error ? response.error.message : genericErrorText);
      }
      ok_submit();
      resolve({
        default: response.url, //업로드된 파일 주소
      });
    });
  };
  UploadAdapter.prototype._sendRequest = function (file) {
    const data = new FormData();
    data.append('upload', file);
    this.xhr.send(data);
  };
  return UploadAdapter;
})();
// ckeditor image upload editor
function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = function (loader) {
    return new UploadAdapter(loader);
  };
}
// ckeditor init
ClassicEditor.create(document.querySelector('#editor'), {
  extraPlugins: [MyCustomUploadAdapterPlugin],
})
  .then(function (editor) {
    theEditor = editor;
  })
  .catch(function (error) {
    console.log(error);
  });
// Get content data
function getDataFromTheEditor() {
  return theEditor.getData();
}
const no_submit = function () {
  const value = $('.btn-upload-wait').text();
  $('.btn-upload-wait').attr('disabled', true);
  $('.btn-upload-wait').text('이미지를 업로드 중 입니다.');
};
const ok_submit = function () {
  $('.btn-upload-wait').attr('disabled', false);
  $('.btn-upload-wait').text('작성완료');
};