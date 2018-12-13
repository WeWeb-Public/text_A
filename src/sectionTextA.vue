<template>
    <div class="text_A">
        <!-- wwManager:start -->
        <wwSectionEditMenu v-bind:sectionCtrl="sectionCtrl"></wwSectionEditMenu>
        <!-- wwManager:end -->

        <wwObject class="background" v-bind:ww-object="section.data.background" ww-category="background"></wwObject>

        <div class="section-padding">
            <div class="row">
                <div class="block col-xs-12 col-md-8 col-md-offset-2">
                    <h1 class="section-title"><wwObject v-bind:ww-object="section.data.title"></wwObject></h1>
                </div>
            </div>

            <div class="row">
                <div class="block col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 content">
                    <wwObject v-bind:ww-object="section.data.subtitle1"></wwObject>
                    <wwObject v-bind:ww-object="section.data.subtitle2"></wwObject>
                    <wwObject v-bind:ww-object="section.data.text"></wwObject>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "text_A",
    props: {
        sectionCtrl: Object
    },
    data() {
        return {}
    },
    computed: {
        section() {
            return this.sectionCtrl.get();
        }
    },
    created() {
        this.section.data = this.section.data || {}
        this.section.data = {"text":{"data":{"popup":null},"font":"","link":"","size":"text-xsmall","text":{"fr_FR":"<i>- The text can also be on the right, or the left, or justified.<br>Enjoy !</i>"},"type":"text","zoom":-1,"align":"right","class":["ww-animspeed-normal","ww-anim-fade-left-bounce"],"image":"/img/no_image_selected.png","ratio":-1,"colors":{"color":"","borderColor":"","backgroundColor":""},"hidden":false,"position":{"x":0,"y":0},"uniqueId":0.9201229669418407},"isNew":false,"title":{"data":{"popup":null},"font":"","link":"","size":"text-big","text":{"fr_FR":"<b>Share Your Story</b>"},"type":"text","zoom":-1,"align":"","class":["ww-anim-fade-top-bounce","ww-animspeed-normal"],"image":"/img/no_image_selected.png","ratio":-1,"colors":{"color":"","borderColor":"","backgroundColor":""},"hidden":false,"position":{"x":0,"y":0},"uniqueId":0.3394403902960288},"subtitle1":{"data":{"popup":null},"font":"sans-serif","link":"","size":"text-small","text":{"fr_FR":"<div><br></div>You have unlimited possibilities to share your story with this text section.<div><br></div>"},"type":"text","zoom":-1,"align":"center","class":["ww-anim-fade","ww-animspeed-slow"],"image":"/img/no_image_selected.png","ratio":-1,"colors":{"color":"","borderColor":"","backgroundColor":""},"hidden":false,"position":{"x":0,"y":0},"uniqueId":0.5228544719519588},"subtitle2":{"data":{"popup":null},"font":"sans-serif","link":"","size":"text-small","text":{"fr_FR":"<br>You can do it with a centered text, with various sizes and length.<br>You can also draw lines of various sizes, check this out :<div>Use animations for a stunning effect!</div><div><br></div>"},"type":"text","zoom":-1,"align":"center","class":["ww-anim-fade","ww-animspeed-slow"],"image":"/img/no_image_selected.png","ratio":-1,"colors":{"color":"","borderColor":"","backgroundColor":""},"hidden":false,"position":{"x":0,"y":0},"uniqueId":0.28917835414897386},"textStyle":{"size":"text-xsmall","align":"right"},"background":{"data":{"popup":null},"font":"","link":null,"size":"","text":{"fr_FR":""},"type":"text","zoom":-1,"align":"","class":[],"image":"#FFFFFF","ratio":-1,"colors":{"color":"","borderColor":"","backgroundColor":""},"hidden":false,"position":{"x":0,"y":0},"uniqueId":0.6051758181869429},"titleStyle":{"size":"text-big","align":"center"},"sectionTitle":"Text1","subtitle1Style":{"size":"text-medium","align":"center"},"subtitle2Style":{"size":"text-small","align":"center"}};

        if (!this.section.data.background)
            this.section.data.background = wwLib.wwObject.getDefault({ type: 'ww-color' });
        
        if (!this.section.data.title)
            this.section.data.title = wwLib.wwObject.getDefault({ type: 'ww-text' });
        
        if (!this.section.data.subtitle1)
            this.section.data.subtitle1 = wwLib.wwObject.getDefault({ type: 'ww-text' });
        
        if (!this.section.data.subtitle2)
            this.section.data.subtitle2 = wwLib.wwObject.getDefault({ type: 'ww-text' });
        
        if (!this.section.data.text)
            this.section.data.text = wwLib.wwObject.getDefault({ type: 'ww-text' });

        this.sectionCtrl.update(this.section);
    },
    methods: {}
};
</script>

<style scoped>
.text_A {
    width: 100%;
    position: relative;
}

.text_A .background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.text_A .section-padding {
    padding: 30px 15px
}

.text_A .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

.text_A .block {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}

@media (min-width: 480px) {
    .text_A .block.content {
        -ms-flex: 0 0 83.333333%;
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
        margin-left: 8.333333%;
    }
}

@media (min-width: 768px) {
    .text_A .section-padding {
        padding: 50px 30px
    }
    .text_A .block {
        -ms-flex: 0 0 66.666666%;
        flex: 0 0 66.666666%;
        max-width: 66.666666%;
        margin-left: 16.666666%;
    }
}

@media (min-width: 992px) {
    .text_A .section-padding {
        padding: 75px 50px
    }
}

@media (min-width: 1200px) {}
</style>
