const { createApp } = Vue;

createApp({
    data() {
        return {
            currentPage: "events",
            events: [],
            searchId: "",
            searchName: "",
            searchDuration: "",
            selectedCategoryFilter: "All",
            registration: {
                username: "",
                password: "",
                confirmPassword: "",
                category: "",
                eventName: ""
            }
        };
    },
    computed: {
        categories() {
            const foundCategories = new Set(this.events.map((event) => event.category));
            return ["All", ...Array.from(foundCategories)];
        },
        eventOnlyCategories() {
            return this.categories.filter((category) => category !== "All");
        },
        filteredEvents() {
            return this.events.filter((event) => {
                const idMatch = event.eventid
                    .toLowerCase()
                    .includes(this.searchId.toLowerCase());
                const nameMatch = event.eventname
                    .toLowerCase()
                    .includes(this.searchName.toLowerCase());
                const durationMatch = String(event.durationhour).includes(this.searchDuration);
                const categoryMatch =
                    this.selectedCategoryFilter === "All" ||
                    event.category === this.selectedCategoryFilter;

                return idMatch && nameMatch && durationMatch && categoryMatch;
            });
        },
        registrationEventOptions() {
            return this.events.filter(
                (event) => event.category === this.registration.category
            );
        },
        showPasswordMismatch() {
            return (
                this.registration.confirmPassword.length > 0 &&
                this.registration.password !== this.registration.confirmPassword
            );
        }
    },
    watch: {
        "registration.category"() {
            this.registration.eventName = "";
        }
    },
    methods: {
        async loadEvents() {
            try {
                const response = await fetch("events.txt");
                const rawText = await response.text();
                const parsedEvents = Function(`"use strict"; return (${rawText});`)();
                this.events = Array.isArray(parsedEvents) ? parsedEvents : [];
            } catch (error) {
                console.error("Failed to load events.txt", error);
                this.events = [];
            }
        }
    },
    mounted() {
        this.loadEvents();
    }
}).mount("#app");
