import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,#f0e5dc_0%,transparent_36%),radial-gradient(circle_at_88%_16%,#efefef_0%,transparent_30%)]" />
      <header className="sticky top-0 z-10 border-b border-black/10 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-[20px] py-[20px] max-md:px-[20px] max-md:py-[10px]">
          <p className="text-xl font-extrabold tracking-wide text-foreground">
            ABIE Coffee
          </p>
          <nav className="hidden items-center gap-[30px] text-base font-semibold text-foreground md:flex">
            <a href="#cookies" className="transition-colors hover:text-primary">
              Cookies
            </a>
            <a href="#menu" className="transition-colors hover:text-primary">
              Menu
            </a>
            <a href="#story" className="transition-colors hover:text-primary">
              Story
            </a>
          </nav>
          <Button
            className="h-[50px] rounded-[50px] px-[30px] text-base"
            size="lg"
          >
            Reserve Table
          </Button>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-[40px] px-[20px] py-[30px] max-md:gap-[30px] max-md:px-[20px] max-md:py-[20px]">
        <section
          id="cookies"
          className="grid items-center gap-[30px] md:grid-cols-[1.2fr_1fr]"
        >
          <div className="space-y-[20px]">
            <p className="inline-flex items-center rounded-[50px] bg-[#f0e5dc] px-[20px] py-[10px] text-sm font-semibold text-foreground">
              Friendly coffeehouse atmosphere
            </p>
            <h1 className="max-w-xl text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
              <span className="text-primary">🍪 Sobre os cookies</span>
              <br />
              Freshly baked to pair with every cup.
            </h1>
            <p className="max-w-lg text-xl leading-8 text-[#666666]">
              We serve hand-rolled cookies and specialty coffee in a warm,
              rounded space made for long chats and quick indulgence.
            </p>
            <div className="flex flex-wrap items-center gap-[20px]">
              <Button
                className="h-[50px] rounded-[50px] px-[30px] text-base"
                size="lg"
              >
                Explore Menu
              </Button>
              <Button
                className="h-[50px] rounded-[50px] border-[3px] px-[30px] text-base"
                variant="outline"
                size="lg"
              >
                Order Cookies
              </Button>
            </div>
          </div>
          <div className="rounded-[50px] border border-black/10 bg-white p-[20px] shadow-[var(--shadow-high)]">
            <div className="grid gap-[10px]">
              <div className="rounded-[40px] bg-primary p-[20px] text-white">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Today&apos;s Batch
                </p>
                <p className="mt-[10px] text-3xl font-extrabold">
                  Chocolate Hazelnut
                </p>
                <p className="mt-[10px] text-lg">Out of oven at 10:30 AM</p>
              </div>
              <div className="grid grid-cols-2 gap-[10px] text-sm">
                <div className="rounded-[30px] border border-black/15 bg-[#efefef] p-[20px]">
                  <p className="text-[#666666]">Beans</p>
                  <p className="mt-[10px] text-lg font-bold text-foreground">
                    Single Origin
                  </p>
                </div>
                <div className="rounded-[30px] border border-black/15 bg-[#efefef] p-[20px]">
                  <p className="text-[#666666]">Roast</p>
                  <p className="mt-[10px] text-lg font-bold text-foreground">
                    Medium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="grid gap-[20px] md:grid-cols-3">
          {[
            {
              name: "Cookie Flight",
              detail: "3 flavors + mini latte",
              price: "$14",
            },
            {
              name: "Red Velvet Cookie",
              detail: "Cream cheese center",
              price: "$5",
            },
            {
              name: "Iced Caramel Brew",
              detail: "Velvety and smooth",
              price: "$6",
            },
          ].map((item) => (
            <article
              key={item.name}
              className="rounded-[50px] border border-black/10 bg-white p-[30px] shadow-[var(--shadow-high)] transition-transform hover:-translate-y-1"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                House Favorite
              </p>
              <h2 className="mt-[10px] text-3xl font-extrabold text-foreground">
                {item.name}
              </h2>
              <p className="mt-[10px] text-lg text-[#666666]">{item.detail}</p>
              <p className="mt-[20px] text-2xl font-bold text-foreground">
                {item.price}
              </p>
            </article>
          ))}
        </section>

        <section
          id="story"
          className="rounded-[50px] border border-black/10 bg-[#f0e5dc] p-[30px] shadow-[var(--shadow-low)] md:p-[40px]"
        >
          <div className="grid gap-[20px] md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Our Story
              </p>
              <h3 className="mt-[10px] text-4xl font-semibold leading-tight text-foreground">
                Rounded design, bold flavor, and comforting ritual.
              </h3>
            </div>
            <p className="text-lg leading-8 text-[#666666]">
              Every detail follows a simple rule: soft corners, bright light,
              and genuine hospitality. We keep our palette clean and our recipes
              playful so the room feels as friendly as the first bite.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
