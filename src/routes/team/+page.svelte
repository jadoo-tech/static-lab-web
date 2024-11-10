<script lang='ts'>
    import people from '$lib/data/people.json';

    type Person = {
        name: string;
        email: string;
        image: string;
        blurb?: string;
    };

    // Filter out Dr. Khalid from the general list and find his data
    const drKhalid = people.find(p => p.name === "Waqas Khalid");
    const user_data: Person[] = [...people]
        .filter(p => p.name !== "Waqas Khalid")
        .sort((a, b) => {
            const aScore = (a.blurb ? 2 : 0) + (a.email ? 1 : 0);
            const bScore = (b.blurb ? 2 : 0) + (b.email ? 1 : 0);
            return bScore - aScore;
        });

    function showEmail(node: HTMLButtonElement, email: string) {
        const parent = node.parentElement;
        if (!parent) return;
        
        node.addEventListener('click', () => {
            // Create a new span with dark mode styling
            const emailSpan = document.createElement('span');
            emailSpan.textContent = email;
            emailSpan.className = 'text-gray-600';
            parent.innerHTML = '';
            parent.appendChild(emailSpan);
        });

        return {
            destroy() {
                node.removeEventListener('click', () => {});
            }
        };
    }
</script>

<div class="page-content">
    <h1 class="section-title">Meet Our Team</h1>
    
    <div class="pi-section">
        <div class="pi-content">
            <img 
                src={drKhalid ? `/profile_pictures/${drKhalid.image}` : ''} 
                alt="Dr. Waqas Khalid"
                class="pi-image"
            />
            <div class="pi-text">
                <h2 class="subsection-title">Dr. Waqas Khalid</h2>
                <p class="subsection-text">
                    Associate Scientist at QB3. Dr. Khalid is an expert in nanotechnology and MEMS. With a passion for innovation, he leads our lab in developing novel carbon nanotube-based sensors and has a strong background in both research and commercialization. He founded Jadoo Technologies Inc. to bring some of our lab's innovations to market.
                </p>
            </div>
        </div>
    </div>

    <h2 class="subsection-title">Our Researchers and Students</h2>
    <p class="subsection-text">
        Our team comprises dedicated researchers and students who contribute diverse expertise in nanotechnology, engineering, and data science. Together, we drive forward the lab's mission through collaborative efforts and a shared vision for technological advancement.
    </p>

    <div class="team-grid">
        {#each user_data as member}
            <div class="team-member-card">
                <img 
                    src={`/profile_pictures/${member.image}`} 
                    alt={member.name}
                    class="member-image"
                />
                <div class="member-info">
                    <h3>{member.name}</h3>
                    {#if member.email}
                        <div class="email-container">
                            <button 
                                class="email-button"
                                use:showEmail={member.email}
                            >
                                View Email
                            </button>
                        </div>
                    {/if}
                    {#if member.blurb}
                        <p class="member-blurb">{member.blurb}</p>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }

    .team-member-card {
        @apply bg-white dark:bg-gray-800 shadow-md overflow-hidden transition-transform duration-200 ease-in-out;
    }

    .team-member-card:hover {
        @apply transform -translate-y-1;
    }

    .member-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    .member-info {
        @apply p-6;
    }

    .member-info h3 {
        @apply text-gray-900 dark:text-white m-0 mb-3 text-xl font-semibold;
    }

    .member-title {
        @apply text-gray-600 dark:text-gray-300 m-0 mb-4 italic;
    }

    .member-blurb {
        @apply text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4;
    }

    .member-roles {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .role-tag {
        @apply bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-600 dark:text-gray-300;
    }

    .email-container {
        @apply mb-4;
    }

    .email-button {
        @apply bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 
               text-white font-medium py-1 px-3 rounded-md text-sm
               transition-colors duration-200 ease-in-out;
    }

    .pi-section {
        @apply mb-12;
    }

    .pi-content {
        @apply flex flex-col md:flex-row gap-8 items-start;
    }

    .pi-image {
        @apply w-full md:w-64 h-auto rounded-lg shadow-md;
    }

    .pi-text {
        @apply flex-1;
    }

    .pi-text h2 {
        @apply mt-0;
    }

    /* Update email container to handle the new span */
    .email-container span {
        @apply text-gray-900 text-sm;
    }
</style>
