import { VApp, VMain } from 'vuetify/components';

export const withVuetifyTheme = (story) => ({
  components: { story, VApp, VMain },
  template: `
    <VApp style="min-height: auto;">
      <VMain style="min-height: auto;">
        <story />
      </VMain>
    </VApp>
  `,
});
