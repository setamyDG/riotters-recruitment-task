import { Card } from '@/components'

export const HomePage = () => (
  <main className="bg-[rgba(247, 249, 254, 1)] mx-auto flex min-h-screen items-center justify-center">
    <Card
      cardBadge="Solution"
      cardTitle="Change the way you approach risk by leveraging the latest technology"
      cardDescription="Generate trading models powered by NVIDIA hardware and GPU-accelerated mathematics"
      cardIllustrationTopBadge="Evaluate Stock"
      cardIllustrationBottomBadge="Optimize Risk"
    />
  </main>
)
