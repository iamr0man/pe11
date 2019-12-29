<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
    <h4 class="title">{{ event.title }}</h4>
    <span>{{ event.attendees.length }} attending</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: "Beach Cleanup",
        date: "Tues Aug 19, 2019",
        time: "6:00",
        attendees: [
          {
            id: "1",
            name: "Adam"
          },
          {
            id: "1",
            name: "Adam"
          }
        ]
      }
    };
  }
};
</script>

<style scoped></style>
