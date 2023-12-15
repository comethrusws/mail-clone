<template>
    <div id="UserComponent">
        <img
            @click="openMenu = !openMenu"
            data-tooltip-target="tooltip-no-arrow-user"
            data-tooltip-placement="bottom"
            src="https://via.placeholder.com/40" 
            class="rounded-full w-8 cursor-pointer"
        >
        <div 
            v-show="!openMenu"
            id="tooltip-no-arrow-user"
            role="tootltip"
            class="
                 inline-block
                 absolute
                 invisible
                 text-xs
                 z-10
                 py-1
                 px-2
                 font-medium
               text-white
                 rounded-sm
                 shadow-sm
                 opacity-0
                 tooltip
                 dark:bg-gray-600
                  delay-150
            "
        >
            <div>Google Account</div>
            <div class="text-gray-300">
                Jim Holmes
            </div>
            <div class="text-gray-300">jimholmes@mail.com</div>
        </div>

        <div v-show="openMenu" class="absolute z-10 w-80 right-2 bg-white top-14 rounded-lg">
           <div class="w-full items-center justify-center">
                <img
                src="https://via.placeholder.com/70" 
                class="rounded-full w-20 mt-4"
                >
           </div>
           <div class="text-gray-700 w-full flex justify-center mt-2 text-lg">
                Jim Holmes
           </div>
           <div class="text-gray-700 w-full flex justify-center mt-2 text-sm pb-4 border-b">
               jimholmes@mail.com
           </div>
           <div class="flex justify-center my-5">
                <button class="bg-transparent text-xs hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4  border-gray-300 rounded">
                    Signout Of Gmail
                </button>
           </div>

        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    let openMenu = ref(false)
</script>