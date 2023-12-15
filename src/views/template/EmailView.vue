<template>
    <div id="EmailView" class="bg-gray-50 h-screen">
        <div class="flex items-center p-2">
            <div class="logo-section flex justify-start items-center px-3.5">
                <IconComponent
                    iconString="menu"
                    iconColor="#636363"
                    :iconSize="19" 
                    hovercolor="hover:bg-gray-200" 
                    text="Main Menu" 
                    class="-ml-2 mr-2" 
                />
                
                <img width="107px" src="../../../public/img/GmailLogo.png">
            </div>
            <div class="flex w-full justify-between">
                <div class="input-width w-full bg-gray-200 flex items-center p-1 px-2 rounded-lg">
                    <IconComponent
                         iconString="magnify"
                        iconColor="#636363"
                        :iconSize="19" 
                        hovercolor="hover:bg-gray-200" 
                         text="Search" 
                        class="-ml-2 mr-2" 
                    />
                    <input
                        placeholder="Search Mail"
                        class="
                            w-full
                            h-10
                            bg-gray-200
                            border-none
                            focus:ring-0
                            outline-none
                            placeholder-gray-900
                        "
                        type="text"
                    >
                    <IconComponent
                         iconString="tune"
                        iconColor="#636363"
                        :iconSize="19" 
                        hovercolor="hover:bg-gray-200" 
                        text="Show Search Options" 
                        class="-ml-2 mr-2" 
                    />
                </div>
                <div class="flex w-32 justify-between items-center ml-6">
                    <IconComponent
                        iconString="cog"
                        iconColor="#636363"
                        :iconSize="19" 
                        hovercolor="hover:bg-gray-200" 
                        text="Settings" 
                        class="-ml-2 mr-2" 
                    />
                    <IconComponent
                         iconString="apps"
                        iconColor="#636363"
                        :iconSize="19" 
                        hovercolor="hover:bg-gray-200" 
                        text="Google Apps" 
                        class="-ml-2 mr-2" 
                    />
                    <UserComponent />
                </div>
            </div>
        </div>

        <div class="flex w-full">
            <div id="SideMenu" class="side-menu">
                <div class="flex items-center justify-center bg-sky-200 w-36 h-8 mt-2 rounded-2xl ml-2 p-7">
                    <PencilOutlineIcon :size="25" class="mr-4" />
                    <span class="text-sm">Compose</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import IconComponent from '@/components/IconComponent.vue';
    import UserComponent from '@/components/UserComponent.vue';
    import PencilOutlineIcon from 'vue-material-design-icons/PencilOutline.vue'
</script>

<style lang="scss">
    #EmailView{
        .logo-section{
            min-width: 250px;
        }
        .input-width{
            max-width: 700px;
        }
    }
</style>