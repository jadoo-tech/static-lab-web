<script>
    import { Menu, X } from 'lucide-svelte';
    import { Button } from '$lib/components/ui/button';
    import * as Sheet from '$lib/components/ui/sheet';
    let isExpanded = false;
    import LightSwitch from './light_switch.svelte';

    const navLinks = [
        { href: '/', label: 'Nanotech Lab' },
        { href: '/about', label: 'About Us' },
        { href: '/research', label: 'Research' },
        { href: '/team', label: 'Team' },
        // { href: '/collaborations', label: 'Collaborations' },
        { href: '/publications', label: 'Publications' },
        // { href: '/news', label: 'News & Events' },
        { href: '/opportunities', label: 'Opportunities' },
        { href: '/areas', label: 'Areas of Interest' }
    ];

    const linkStyles = "hover:text-blue-600 transition-colors";
</script>

<nav class="shadow-md">
    <div class="md:hidden flex justify-between items-center p-4">
        <LightSwitch />
        <a href="/" class="hover:text-blue-600 transition-colors">Nanotech Lab</a>
        <Sheet.Root bind:open={isExpanded}>
            <Sheet.Trigger>
                <Button variant="ghost" size="icon">
                    <Menu size={24} />
                    <span class="sr-only">Toggle menu</span>
                </Button>
            </Sheet.Trigger>
            <Sheet.Content side="right" class="w-[250px]">
                <Sheet.Header>
                    <Sheet.Title>Navigation</Sheet.Title>
                    <Sheet.Description>
                        Browse our site
                    </Sheet.Description>
                </Sheet.Header>
                <nav class="flex flex-col gap-4 mt-4">
                    {#each navLinks as {href, label}}
                        <a {href} class={linkStyles}>{label}</a>
                    {/each}
                </nav>
            </Sheet.Content>
        </Sheet.Root>
    </div>
    
    <ul class="hidden md:flex md:flex-row md:justify-center md:items-center list-none p-4 md:space-x-6">
        {#each navLinks as {href, label}}
            <li><a {href} class={linkStyles}>{label}</a></li>
        {/each}
        <li class="flex items-center"><LightSwitch /></li>
    </ul>

</nav>