<template>
    <div>
        <ul id="example-1">
            <li v-for="team in teams">
                {{ team.city }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            teams: [
                { city: 'Atlanta' },
                { city: 'Boston' },
                { city: 'Chicago'}
            ]
        }
    },
    methods: {
        changeStatus() {
            this.status = 'Normal';
        }
    }
}
</script>
