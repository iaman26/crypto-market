<template>
  <div class="px-11">
    <div class="flex items-center justify-between">
      <div class="text-base font-semibold">Payment Option</div>
      <div
        class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
      >
        <div class="h-6 w-6">
          <UIcon name="IconDetail" dynamic filled />
        </div>
      </div>
    </div>
  </div>
  <div class="mb-10 mt-9 h-0.5 w-full bg-zinc-900"></div>
  <div class="px-9">
    <div class="grid grid-cols-3 gap-5">
      <div class="h-[135px] w-full rounded-[30px] bg-gray-800 p-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="h-[30px] w-[30px] rounded-[25px] border border-black border-opacity-20"
              src="~assets/images/github.png"
            />
            <div class="text-sm font-normal">GitHub</div>
          </div>
          <div
            :class="
              isGithub
                ? 'flex-row-reverse bg-green-600'
                : 'border-[3px] border-slate-400 bg-gray-900'
            "
            class="flex h-6 w-11 items-center rounded-full"
            @click="onSelect(1)"
          >
            <div
              :class="isGithub ? 'bg-zinc-900' : 'bg-slate-400'"
              class="mx-2 h-3 w-3 rounded-full"
            ></div>
          </div>
        </div>
        <div class="mt-[26px] w-full text-xs font-normal text-zinc-400">
          For your account security
        </div>
      </div>
      <div class="h-[135px] w-full rounded-[30px] bg-gray-800 p-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="h-[30px] w-[30px] rounded-[25px] border border-black border-opacity-20"
              src="~assets/images/figma.png"
            />
            <div class="text-sm font-normal">Figma</div>
          </div>
          <div
            :class="
              isGithub
                ? 'flex-row-reverse bg-green-600'
                : 'border-[3px] border-slate-400 bg-gray-900'
            "
            class="flex h-6 w-11 items-center rounded-full"
            @click="onSelect(1)"
          >
            <div
              :class="isGithub ? 'bg-zinc-900' : 'bg-slate-400'"
              class="mx-2 h-3 w-3 rounded-full"
            ></div>
          </div>
        </div>
        <div class="mt-[26px] w-full text-xs font-normal text-zinc-400">
          Figma is a collaborative design tool.
        </div>
      </div>
      <div class="h-[135px] w-full rounded-[30px] bg-gray-800 p-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="h-[30px] w-[30px] rounded-[25px] border border-black border-opacity-20"
              src="~assets/images/slack-2.png"
            />
            <div class="text-sm font-normal">Slack</div>
          </div>
          <div
            :class="
              isGithub
                ? 'flex-row-reverse bg-green-600'
                : 'border-[3px] border-slate-400 bg-gray-900'
            "
            class="flex h-6 w-11 items-center rounded-full"
            @click="onSelect(1)"
          >
            <div
              :class="isGithub ? 'bg-zinc-900' : 'bg-slate-400'"
              class="mx-2 h-3 w-3 rounded-full"
            ></div>
          </div>
        </div>
        <div class="mt-[26px] w-full text-xs font-normal text-zinc-400">
          For your account security
        </div>
      </div>
      <div class="h-[135px] w-full rounded-[30px] bg-gray-800 p-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="h-[30px] w-[30px] rounded-[25px] border border-black border-opacity-20"
              src="~assets/images/Linear.png"
            />
            <div class="text-sm font-normal">Linear</div>
          </div>
          <div
            :class="
              isGithub
                ? 'flex-row-reverse bg-green-600'
                : 'border-[3px] border-slate-400 bg-gray-900'
            "
            class="flex h-6 w-11 items-center rounded-full"
            @click="onSelect(1)"
          >
            <div
              :class="isGithub ? 'bg-zinc-900' : 'bg-slate-400'"
              class="mx-2 h-3 w-3 rounded-full"
            ></div>
          </div>
        </div>
        <div class="mt-[26px] w-full text-xs font-normal text-zinc-400">
          Streaming software projects, sprints, and bug tracking.
        </div>
      </div>
      <div class="h-[135px] w-full rounded-[30px] bg-gray-800 p-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="h-[30px] w-[30px] rounded-[25px] border border-black border-opacity-20"
              src="~assets/images/zapier.png"
            />
            <div class="text-sm font-normal">zapier</div>
          </div>
          <div
            :class="
              isGithub
                ? 'flex-row-reverse bg-green-600'
                : 'border-[3px] border-slate-400 bg-gray-900'
            "
            class="flex h-6 w-11 items-center rounded-full"
            @click="onSelect(1)"
          >
            <div
              :class="isGithub ? 'bg-zinc-900' : 'bg-slate-400'"
              class="mx-2 h-3 w-3 rounded-full"
            ></div>
          </div>
        </div>
        <div class="mt-[26px] w-full text-xs font-normal text-zinc-400">
          Builf custom automations and integrations with apps
        </div>
      </div>
      <div class="h-[135px] w-full rounded-[30px] bg-gray-800 p-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="h-[30px] w-[30px] rounded-[25px] border border-black border-opacity-20"
              src="~assets/images/slack-2.png"
            />
            <div class="text-sm font-normal">Slack</div>
          </div>
          <div
            :class="
              isGithub
                ? 'flex-row-reverse bg-green-600'
                : 'border-[3px] border-slate-400 bg-gray-900'
            "
            class="flex h-6 w-11 items-center rounded-full"
            @click="onSelect(1)"
          >
            <div
              :class="isGithub ? 'bg-zinc-900' : 'bg-slate-400'"
              class="mx-2 h-3 w-3 rounded-full"
            ></div>
          </div>
        </div>
        <div class="mt-[26px] w-full text-xs font-normal text-zinc-400">
          For your account security
        </div>
      </div>
      <div class="h-[135px] w-full rounded-[30px] bg-gray-800 p-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="h-[30px] w-[30px] rounded-[25px] border border-black border-opacity-20"
              src="~assets/images/github.png"
            />
            <div class="text-sm font-normal">GitHub</div>
          </div>
          <div
            :class="
              isGithub
                ? 'flex-row-reverse bg-green-600'
                : 'border-[3px] border-slate-400 bg-gray-900'
            "
            class="flex h-6 w-11 items-center rounded-full"
            @click="onSelect(1)"
          >
            <div
              :class="isGithub ? 'bg-zinc-900' : 'bg-slate-400'"
              class="mx-2 h-3 w-3 rounded-full"
            ></div>
          </div>
        </div>
        <div class="mt-[26px] w-full text-xs font-normal text-zinc-400">
          For your account security
        </div>
      </div>
      <div class="h-[135px] w-full rounded-[30px] bg-gray-800 p-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="h-[30px] w-[30px] rounded-[25px] border border-black border-opacity-20"
              src="~assets/images/figma.png"
            />
            <div class="text-sm font-normal">Figma</div>
          </div>
          <div
            :class="
              isGithub
                ? 'flex-row-reverse bg-green-600'
                : 'border-[3px] border-slate-400 bg-gray-900'
            "
            class="flex h-6 w-11 items-center rounded-full"
            @click="onSelect(1)"
          >
            <div
              :class="isGithub ? 'bg-zinc-900' : 'bg-slate-400'"
              class="mx-2 h-3 w-3 rounded-full"
            ></div>
          </div>
        </div>
        <div class="mt-[26px] w-full text-xs font-normal text-zinc-400">
          Figma is a collaborative design tool.
        </div>
      </div>
      <div class="h-[135px] w-full rounded-[30px] bg-gray-800 p-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="h-[30px] w-[30px] rounded-[25px] border border-black border-opacity-20"
              src="~assets/images/Telegram.png"
            />
            <div class="text-sm font-normal">Telegram</div>
          </div>
          <div
            :class="
              isGithub
                ? 'flex-row-reverse bg-green-600'
                : 'border-[3px] border-slate-400 bg-gray-900'
            "
            class="flex h-6 w-11 items-center rounded-full"
            @click="onSelect(1)"
          >
            <div
              :class="isGithub ? 'bg-zinc-900' : 'bg-slate-400'"
              class="mx-2 h-3 w-3 rounded-full"
            ></div>
          </div>
        </div>
        <div class="mt-[26px] w-full text-xs font-normal text-zinc-400">
          Telegram is a cloud-based instant messaging service.
        </div>
      </div>
      <div class="h-[135px] w-full rounded-[30px] bg-gray-800 p-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="h-[30px] w-[30px] rounded-[25px] border border-black border-opacity-20"
              src="~assets/images/gg.png"
            />
            <div class="text-sm font-normal">Google</div>
          </div>
          <div
            :class="
              isGithub
                ? 'flex-row-reverse bg-green-600'
                : 'border-[3px] border-slate-400 bg-gray-900'
            "
            class="flex h-6 w-11 items-center rounded-full"
            @click="onSelect(1)"
          >
            <div
              :class="isGithub ? 'bg-zinc-900' : 'bg-slate-400'"
              class="mx-2 h-3 w-3 rounded-full"
            ></div>
          </div>
        </div>
        <div class="mt-[26px] w-full text-xs font-normal text-zinc-400">
          Google focuses on search engine technology
        </div>
      </div>
      <div class="h-[135px] w-full rounded-[30px] bg-gray-800 p-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="h-[30px] w-[30px] rounded-[25px] border border-black border-opacity-20"
              src="~assets/images/Evernote.png"
            />
            <div class="text-sm font-normal">Evernote</div>
          </div>
          <div
            :class="
              isGithub
                ? 'flex-row-reverse bg-green-600'
                : 'border-[3px] border-slate-400 bg-gray-900'
            "
            class="flex h-6 w-11 items-center rounded-full"
            @click="onSelect(1)"
          >
            <div
              :class="isGithub ? 'bg-zinc-900' : 'bg-slate-400'"
              class="mx-2 h-3 w-3 rounded-full"
            ></div>
          </div>
        </div>
        <div class="mt-[26px] w-full text-xs font-normal text-zinc-400">
          Evernote is a notetaking / task management application.
        </div>
      </div>
      <div class="h-[135px] w-full rounded-[30px] bg-gray-800 p-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="h-[30px] w-[30px] rounded-[25px] border border-black border-opacity-20"
              src="~assets/images/gilab.png"
            />
            <div class="text-sm font-normal">GitHub</div>
          </div>
          <div
            :class="
              isGithub
                ? 'flex-row-reverse bg-green-600'
                : 'border-[3px] border-slate-400 bg-gray-900'
            "
            class="flex h-6 w-11 items-center rounded-full"
            @click="onSelect(1)"
          >
            <div
              :class="isGithub ? 'bg-zinc-900' : 'bg-slate-400'"
              class="mx-2 h-3 w-3 rounded-full"
            ></div>
          </div>
        </div>
        <div class="mt-[26px] w-full text-xs font-normal text-zinc-400">
          develop, secure, and operate in a single application.
        </div>
      </div>
    </div>
  </div>
  <div
    class="mt-9 flex h-[45px] w-full items-center justify-center rounded-[15px]"
  >
    <div class="mr-[5px] h-6 w-6">
      <UIcon name="i-circum-square-more" dynamic />
    </div>
    <div class="text-center text-base font-normal text-neutral-200">
      Load More
    </div>
  </div>
</template>
<script setup>
let isGithub = ref(false)
function onSelect(value) {
  switch (value) {
    case 1:
      isGithub.value = !isGithub.value
      break
    default:
      break
  }
}
</script>
