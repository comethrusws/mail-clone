<template>
<div id="HomeView" class="w-full bg-white ml-2 rounded-t-xl h-full shadow-xm">
    <div class="border-b">
        <div class="flex items-center justify-between px-4 my-3">
            <IconComponent class="-m-2 -ml-2.5" iconString="trash" iconColor="#636363" :iconSize="19" hovercolor="hover:bg-gray-200" text="Delete Selected" />
        </div>
    </div>
</div>
</template>

<script>
export default{
  name:'HomeView',
  components:{IconComponent}
}
import IconComponent from '@/components/IconComponent.vue'
</script>
