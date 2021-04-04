let theEditor;

class UploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file.then( file => new Promise(((resolve, reject) => {
            this._initRequest();
            this._initListeners( resolve, reject, file );
            this._sendRequest( file );
        })))
    }

    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();
        no_submit();
        xhr.open('POST', 'https://won-yang.com/api/image/upload', true);
        xhr.responseType = 'json';
    }

    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = '파일을 업로드 할 수 없습니다.'

        xhr.addEventListener('error', () => {reject(genericErrorText)})
        xhr.addEventListener('abort', () => reject())
        xhr.addEventListener('load', () => {
            const response = xhr.response
            if(!response || response.error) {
                return reject( response && response.error ? response.error.message : genericErrorText );
            }
            ok_submit();
            resolve({
                default: response.url //업로드된 파일 주소
            })
        })
    }

    _sendRequest(file) {
        const data = new FormData()
        data.append('upload',file)
        this.xhr.send(data);
    }
}


// ckeditor image upload editor
function MyCustomUploadAdapterPlugin( editor ) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
        return new UploadAdapter( loader );
    };
}

// ckeditor init
ClassicEditor
    .create( document.querySelector( '#editor' ), {
        extraPlugins: [ MyCustomUploadAdapterPlugin ],

    } )
    .then(editor  => {
        theEditor=editor ;
    })
    .catch( error => {
        console.log( error );
    } );
    

// Get content data
function getDataFromTheEditor() {
    return theEditor.getData();
}


function no_submit(){
    let value = $(".btn-upload-wait").text();
    $(".btn-upload-wait").attr("disabled" , true);
    $(".btn-upload-wait").text("이미지를 업로드 중 입니다.");
}

function ok_submit(){
    $(".btn-upload-wait").attr("disabled" , false);
    $(".btn-upload-wait").text("작성완료");
}