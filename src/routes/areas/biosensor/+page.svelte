<style>
    .resources-container {
        @apply max-w-4xl mx-auto p-5;
    }

    .resource-section {
        @apply mb-8;
    }

    .section-title {
        @apply text-2xl font-bold mb-4 pb-2;
        color: var(--text-color);
        border-bottom: 2px solid var(--heading-border);
    }

    .resource-item {
        @apply mb-6 p-4 rounded-lg;
        background-color: var(--card-bg);
        border: 1px solid var(--card-border-color);
    }

    .resource-title {
        @apply text-lg font-semibold mb-2;
        color: var(--text-color);
    }

    .resource-description {
        @apply mb-3 text-sm;
        color: var(--text-color);
    }

    .presentation-container {
        @apply w-full aspect-video mb-4;
    }

    .presentation-container iframe {
        @apply w-full h-full rounded-lg;
        border: 1px solid var(--card-border-color);
    }
</style>

<div class="resources-container">
    <h1 class="section-title">Biosensor Team Resources</h1>

    <div class="resource-section">
        <div class="resource-item">
            <h2 class="resource-title">Project Overview Presentation</h2>
            <div class="resource-description">
                This presentation has basic theoretical information relevant to the biosensor team.
            </div>
            <div class="presentation-container">
                <iframe 
                    src="https://drive.google.com/file/d/1tl5htONYJSrpQhm1OWCrIo0q14kgIDkg/preview" 
                    allow="autoplay"
                    loading="lazy"
                    title="Biosensor Project Overview Presentation"
                ></iframe>
            </div>
        </div>

        <!-- Additional resources can be added here following the same pattern -->
    </div>
</div>
