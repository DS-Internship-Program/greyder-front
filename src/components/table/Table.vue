<template>
    <div>
        <TabNav :tabs="['Data', 'Settings', 'Profile']"
                :selected="selected"
                @selected="setSelected">
            <Tab :isSelected="selected === 'Data'">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, voluptate!
            </Tab>
            <Tab :isSelected="selected === 'Settings'">
                Some test text
            </Tab>
            <Tab :isSelected="selected === 'Profile'">
                <ul>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum.</li>
                </ul>
            </Tab>
        </TabNav>
    </div>
</template>

<script>
    import TabNav from "./TabNav";
    import Tab from "./Tab";


    export default {
        name: "Table",
        components: {
            TabNav, Tab
        },
        data() {
            return {
                selected: 'Data'
            }
        },
        methods: {
            setSelected(tab) {
                this.selected = tab;
            }
        }
    }
</script>

<style scoped>

</style>