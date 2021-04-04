$(".btn-edit-finish").click(function(){
    const title = $("input[name=title]").val();
    const contact = $("input[name=contact]").val();
    const deposit = $("input[name=deposit]").val();
    const monthly_rent = $("input[name=monthly_rent]").val();
    const contract_period = $("input[name=contract_period]").val();
    const address = $("input[name=address]").val();
    const content = getDataFromTheEditor();
    const tag = $(".dropdown-toggle").text();
    let post_idx = $("input[name=post_idx]").val();
    
    if(tag === "태그"){
        alert("태그를 선택해주세요");
        return;
    }
    
    if(title.length == 0){
        alert("제목을 적어주세요");
        return;
    }
    if(contact.length == 0){
        alert("연락처를 적어주세요");
        return;
    }
    if(deposit.length == 0){
       alert("보증금을 적어주세요");
        return;
    }
    if(monthly_rent.length == 0){
       alert("월세를 적어주세요");
        return;
    }
    if(contract_period.length == 0){
        alert("계약기간을 적어주세요");
        return;
    }
    if(address.length == 0){
        alert("위치를 적어주세요");
        return;
    }
    
    
    const air_conditioner = $("input[name=air_conditioner]").is(":checked");
    const refrigerator = $("input[name=refrigerator]").is(":checked");
    const desk = $("input[name=desk]").is(":checked");
    const wifi = $("input[name=wifi]").is(":checked");
    const washing_machine = $("input[name=washing_machine]").is(":checked");
    const gas_stove = $("input[name=gas_stove]").is(":checked");
    const door_lock = $("input[name=door_lock]").is(":checked");
    const microwave = $("input[name=microwave]").is(":checked");
    const cctv = $("input[name=cctv]").is(":checked");
    const closet = $("input[name=closet]").is(":checked");
    const bed = $("input[name=bed]").is(":checked");
    const tv = $("input[name=tv]").is(":checked");
    const public_washing_machine = $("input[name=public_washing_machine]").is(":checked");
    const public_kitchen = $("input[name=public_kitchen]").is(":checked");
    const elevator = $("input[name=elevator]").is(":checked");


    $.ajax({
        type: "POST",
        url: "/edit_ok",
        data : {
            "title" : title,
            "contact" : contact,
            "deposit" : deposit,
            "monthly_rent" : monthly_rent,
            "contract_period" : contract_period,
            "address" : address,
            "content" : content,
            "tag" : tag,
            "post_idx" : post_idx,
            "air_conditioner" : air_conditioner,
            "refrigerator" : refrigerator,
            "desk" : desk,
            "wifi" : wifi,
            "washing_machine" : washing_machine,
            "gas_stove" : gas_stove,
            "door_lock" : door_lock,
            "microwave" : microwave,
            "cctv" : cctv,
            "closet" :closet,
            "bed" : bed,
            "tv" : tv,
            "public_washing_machine" : public_washing_machine,
            "public_kitchen" : public_kitchen,
            "elevator" : elevator, 
            "idx" : post_idx
        },

        dataType: 'json',
        success: function(data) {
               var result = data;
                
            if(result.result == "error"){
                alert(result.message);
                location.href = result.redirect;
            }
            else{
                alert(result.message);
                location.href = result.redirect;
            }
        }
    });
    
    
});


/* 내용 입력 시, 글자 수 검증 */
$("#editor").on({
    keydown: function(event){
        if($("#editor").text().length <= 2000){
            var current_length = $("#editor").text().length;
            $(".text-length").text(current_length + "자");
        }
        else{
            event.preventDefault();
        }
    }
})

function onlyNumber(){
    if((event.keyCode<48)||(event.keyCode>57)){
        event.returnValue=false;
    }
}