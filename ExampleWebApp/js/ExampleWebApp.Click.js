/// <reference path="jquery-1.9.1-vsdoc.js" /> //Вот эта строка моя прихоть. Она добавляает потдержку jquery в Вижуал студию, на уровне подсказок. Хотя врлде она сечас и так есть
(function ($) { 
    var methods = { //Масив методов. 
        init: function(options) { // Метод init, который запускается по умолчанию. Так  же сюда передаются option, который ты можешь передавать при вызове плагина.
            return this.each(function () { //Такак плагин может быть вызван не от одного элемента(например, мы пишем плагин и запускаем его от каждого элемента списка $("li").ClickPlugin();), то мы итерируем по ним. 
                var $this = $(this); // $(this); - позволяет работать внутры элемента от которого ты вызвал плагин. Т.е. если ты его вызвал от списка $("ul").ClickPlugin();, то можешь работать внутри этого списка, а не со всей страницей. Так мы соблюдаем некую безопасность.
                var $button = $this.find(".defaultSidebarButton");//$button, кнопка на которую будем нажымать. Раньше ты писал $(".defaultSidebarButton")
                $button.click(function() { // По Клику запускаем функцию.
                    $.ajax({
                        type: "POST",
                        url: "/ajax/WebService.asmx/HelloWorld",
                        data: "{name: 'Anton', id: 5}",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                            alert(data.d);
                        }
                    });
                });
            });
        }
    };

    $.fn.ClickPlugin = function (method) { // Сам плагин, ClickPlugin - Название, так ты его будешь потом вызывать. Это входная точка в плагин, дальше она по умолчанию вызовит methods init, который описан выше

    if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, arguments);
    } else {
        $.error('Method ' + method + ' does not exist on jQuery.suzyProfile');
    }
}
})(jQuery);