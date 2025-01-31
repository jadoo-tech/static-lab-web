<script lang="ts">
    // You can add TypeScript code here if needed.
</script>

<style>
    .button-link {
        @apply inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors mx-4;
    }
</style>

<div class="relative h-screen" style="height: 86vh;">

    <div style="background-image: url('https://images.unsplash.com/photo-1630959305606-3123a081dada'); background-size: cover; background-position: center;" class="absolute inset-0 rounded-lg">
    </div>
    
    <div class="relative z-10 flex items-center justify-center h-full px-8">
        <div class="max-w-[800px] py-8 px-4 text-center border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <h1 class="md:text-4xl font-bold text-[#0A1172] dark:text-blue-300 mb-4 sm:text-2xl">Nanotech Lab Homepage</h1>
            <p class="text-lg md:text-xl mb-4 text-teal-600 dark:text-fuchsia-600 sm:text-base">
                Welcome to the UC Berkeley Nanotechnology Lab
            </p>
            <p class="text-xs md:text-lg leading-relaxed text-gray-800 dark:text-gray-50 dark:text-white sm:text-sm mb-4">
                Discover cutting-edge innovations in nanotechnology applications. Led by Dr. Waqas Khalid, our lab specializes in carbon nanotube sensors and fosters multidisciplinary collaborations to address real-world challenges. Explore our work in healthcare monitoring, energy solutions, environmental sensing, and advancements in the semiconductor industry.
            </p>
            <!-- project areas button -->
            <a href="/areas" class="button-link">Explore Project Areas</a>
            <!-- opportunities button -->
            <a href="/opportunities" class="button-link">Join Us</a>
        </div>
    </div>
</div>