<template>
  <UTable :rows="items" :columns="columns">
    <template #event-data="{ row }">
      <!-- <div class="text-yellow-400">
        <UIcon name="IconListIcon" dynamic filled  :width="24" :height="24" class="text-red-400 hover:text-blue-500"></UIcon>
      </div> -->
      <UIcon
        :name="getIconEvent(row.event)"
        dynamic
        filled
        class="mr-2"
        :width="24"
        :height="24"
      />
      <span>{{ row.event }}</span>
    </template>
  </UTable>
</template>

<script setup>
const columns = [
  {
    key: 'event',
    label: 'Event',
    sortable: true,
  },
  {
    key: 'price',
    label: 'Price',
    sortable: true,
  },
  {
    key: 'from',
    label: 'From',
    sortable: true,
  },
  {
    key: 'to',
    label: 'To',
    sortable: true,
  },
  {
    key: 'date',
    label: 'Date',
    sortable: true,
  },
]

const items = [
  {
    event: 'Sale',
    price: '0.41 ETH',
    from: '0x50f5474724e ... fb275809fd6d4a',
    to: '0x50f5474724e ... fb275809fd6d4a',
    date: 'Jun 14 - 4:12 PM',
  },
  {
    event: 'Cancel',
    price: '0.42 ETH',
    from: '0x50f5474724e ... fb275809fd6d4a',
    to: '0x50f5474724e ... fb275809fd6d4a',
    date: 'Jun 14 - 4:12 PM',
  },
  {
    event: 'Sale',
    price: '0.1 ETH',
    from: '0x50f5474724e ... fb275809fd6d4a',
    to: '0x50f5474724e ... fb275809fd6d4a',
    date: 'Jun 14 - 4:12 PM',
  },
  {
    event: 'List',
    price: '0.39 ETH',
    from: '0x50f5474724e ... fb275809fd6d4a',
    to: '0x50f5474724e ... fb275809fd6d4a',
    date: 'Jun 14 - 4:12 PM',
  },
  {
    event: 'Minted',
    price: '0.50 ETH',
    from: '0x50f5474724e ... fb275809fd6d4a',
    to: '0x50f5474724e ... fb275809fd6d4a',
    date: 'Jun 14 - 4:12 PM',
  },
]

const getIconEvent = (event) => {
  const icons = {
    List: 'IconListIcon',
    Minted: 'IconMinted',
    Sale: 'IconSale',
    Cancel: 'IconCancel',
  }
  return icons[event]
}
</script>

<style scoped></style>
