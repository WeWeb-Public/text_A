<template>
    <div class="text_A">
        <!-- wwManager:start -->
        <wwSectionEditMenu v-bind:sectionCtrl="sectionCtrl"></wwSectionEditMenu>
        <!-- wwManager:end -->

        <wwObject class="background" v-bind:ww-object="section.data.background" ww-category="background"></wwObject>

        <div class="container">
            <div class="section-padding">
                <div class="row">
                        <div class="block">
                        <h1 class="section-title"><wwObject v-bind:ww-object="section.data.title"></wwObject></h1>
                    </div>
                </div>

                <div class="row">
                    <div class="block content">
                        <wwObject v-bind:ww-object="section.data.subtitle1"></wwObject>
                        <wwObject v-bind:ww-object="section.data.subtitle2"></wwObject>
                        <wwObject v-bind:ww-object="section.data.text"></wwObject>
                    </div>
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

        if (!this.section.data.background) {
            this.section.data.background = wwLib.wwObject.getDefault({ type: 'ww-color' });
        }
        if (!this.section.data.title) {
            this.section.data.title = wwLib.wwObject.getDefault({ type: 'ww-text' });
        }
        if (!this.section.data.subtitle1) {
            this.section.data.subtitle1 = wwLib.wwObject.getDefault({ type: 'ww-text' });
        }
        if (!this.section.data.subtitle2) {
            this.section.data.subtitle2 = wwLib.wwObject.getDefault({ type: 'ww-text' });
        }
        if (!this.section.data.text) {
            this.section.data.text = wwLib.wwObject.getDefault({ type: 'ww-text' });
        }
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

.text_A .section-title {
    text-align: center;
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
