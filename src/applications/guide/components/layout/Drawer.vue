<template>
  <v-navigation-drawer app>
    <v-list
      class="pa-0"
      dense
      expand
    >
      <template v-for="(item, i) in items">
        <v-subheader
          v-if="item.header"
          :key="`subheader-${i}`"
          v-text="item.header"
        />
        <v-divider
          v-else-if="item.divider"
          :key="`divider-${i}`"
        />
        <group
          v-else-if="item.group"
          :key="`group-${i}`"
          :item="item"
        />
        <item
          v-else
          :icon="item.icon"
          :key="`item-${i}`"
          :text="item.text"
          :to="item.to"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    components: {
      Group: () => import('./partials/Group')
    },

    data: () => ({
      items: [
        {
          group: 'getting-started',
          text: 'Getting started',
          icon: 'mdi-speedometer',
          children: [
            { text: 'Quick start', to: 'quick-start' },
            { text: 'Why Vuetify?', to: 'why-vuetify' },
            { text: 'Frequently asked questions', to: 'frequently-asked-questions' },
            { text: 'Sponsors and backers', to: 'sponsors-and-backers' },
            { text: 'Contributing', to: 'contributing' },
            { text: 'Roadmap', to: 'roadmap' },
            { text: 'Consulting and support', to: 'consulting-and-support' }
          ]
        },
        {
          group: 'framework',
          text: 'Framework options',
          icon: 'mdi-buffer',
          children: [
            { text: 'A-la-carte', to: 'a-la-carte' },
            { text: 'Icons', to: 'icons' },
            { text: 'Internationalization', to: 'internationalization' }
          ]
        },
        {
          group: 'layout',
          text: 'Application layout',
          icon: 'mdi-page-layout-body',
          children: [
            { text: 'Pre-defined layouts', to: 'pre-defined' },
            { text: 'Pre-made themes', to: 'pre-made-themes' },
            {
              group: 'layout',
              text: 'Grid system',
              children: [
                { text: 'Grid', to: 'grid' },
                { text: 'Grid lists', to: 'grid-lists' }
              ]
            },
            { text: 'Breakpoints', to: 'breakpoints' },
            { text: 'Aspect ratios', to: 'aspect-ratios' },
            { text: 'Spacing', to: 'spacing' },
            { text: 'Text alignment', to: 'alignment' },
            { text: 'Display', to: 'display' },
            { text: 'Elevation', to: 'elevation' },
            { text: 'Sandbox', to: 'sandbox' }
          ]
        },
        {
          group: 'style',
          text: 'Styles & themes',
          icon: 'mdi-format-color-fill',
          children: [
            { text: 'Colors', to: 'colors' },
            { text: 'Theme', to: 'theme' },
            { text: 'Typography', to: 'typography' },
            { text: 'Content', to: 'content' }
          ]
        },
        {
          group: 'motion',
          text: 'Motion & transitions',
          icon: 'mdi-clock-fast',
          children: [
            { text: 'Scrolling', to: 'scrolling' },
            { text: 'Transitions', to: 'transitions' }
          ]
        },
        {
          group: 'components',
          text: 'UI components',
          icon: 'mdi-view-dashboard',
          children: [
            { text: 'API explorer', to: 'api-explorer' },
            { text: 'Alerts', to: 'alerts' },
            { text: 'Avatars', to: 'avatars' },
            { text: 'Badges', to: 'Badges' },
            { text: 'Bottom navigation', to: 'bottom-navigation' },
            { text: 'Bottom sheets', to: 'bottom-sheets' },
            { text: 'Breadcrumbs', to: 'breadcrumbs' },
            { text: 'Buttons', to: 'buttons' },
            { text: 'Buttons: Floating action buttons', to: 'floating-action-buttons' },
            { text: 'Cards', to: 'cards' },
            { text: 'Carousels', to: 'carousels' },
            { text: 'Chips', to: 'chips' },
            { text: 'Data iterator', to: 'data-iterator' },
            { text: 'Data tables', to: 'data-tables' },
            { text: 'Dialogs', to: 'dialogs' },
            { text: 'Dividers', to: 'dividers' },
            { text: 'Expansion panels', to: 'expansion-panels' },
            { text: 'Footer', to: 'footer' },
            {
              group: 'components',
              text: 'Groups',
              children: [
                { text: 'Button groups', to: 'button-groups' },
                { text: 'Item groups', to: 'item-groups' },
                { text: 'Windows', to: 'windows' }
              ]
            },
            {
              group: 'components',
              text: 'Inputs & controls',
              children: [
                { text: 'Autocompletes', to: 'autocompletes' },
                { text: 'Combobox', to: 'combobox' },
                { text: 'Forms', to: 'forms' },
                { text: 'Inputs', to: 'inputs' },
                { text: 'Overflow buttons', to: 'overflow-btns' },
                { text: 'Selects', to: 'selects' },
                { text: 'Selection controls', to: 'selection-controls' },
                { text: 'Sliders', to: 'sliders' },
                { text: 'Textareas', to: 'textarea' },
                { text: 'Text fields', to: 'text-fields' }
              ]
            },
            { text: 'Hover', to: 'hover' },
            { text: 'Icons', to: 'icons' },
            { text: 'Images', to: 'images' },
            { text: 'Lists', to: 'lists' },
            { text: 'Menus', to: 'menus' },
            { text: 'Navigation drawers', to: 'navigation-drawers' },
            { text: 'Paginations', to: 'paginations' },
            { text: 'Parallax', to: 'parallax' },
            {
              group: 'components',
              text: 'Pickers',
              children: [
                { text: 'Date pickers', to: 'date-pickers' },
                { text: 'Time pickers', to: 'time-pickers' }
              ]
            },
            { text: 'Progress', to: 'progress' },
            { text: 'Ratings', to: 'ratings' },
            { text: 'Snackbars', to: 'snackbars' },
            { text: 'Steppers', to: 'steppers' },
            { text: 'Subheaders', to: 'subheaders' },
            { text: 'Tabs', to: 'tabs' },
            { text: 'Timelines', to: 'timelines' },
            { text: 'Toolbars', to: 'toolbars' },
            { text: 'Tooltips', to: 'tooltips' }
          ]
        },
        {
          group: 'directives',
          text: 'Directives',
          icon: 'mdi-function',
          children: [
            { text: 'Resizing', to: 'resizing' },
            { text: 'Ripples', to: 'ripples' },
            { text: 'Scrolling', to: 'scrolling' },
            { text: 'Touch support', to: 'touch-support' }
          ]
        },
        {
          text: 'Theme generator',
          icon: 'mdi-format-paint',
          to: 'theme-generator'
        }
      ]
    })
  }
</script>
