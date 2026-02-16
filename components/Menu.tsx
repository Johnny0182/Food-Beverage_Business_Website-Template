type MenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string;
};

const coffeeItems: MenuItem[] = [
  { name: 'Dracula Latte', description: 'Espresso, steamed milk', price: '$6', note: '(Latte)' },
  { name: 'Silent Hill Black', description: 'House drip coffee', price: '$4', note: '(Black Coffee)' },
  { name: 'Dead Space Cold Brew', description: '18-hour cold brew', price: '$5', note: '(Cold Brew)' },
  { name: 'Nosferatu Iced Latte', description: 'Espresso, milk, ice', price: '$6', note: '(Iced Latte)' },
  { name: 'Chucky Double Shot', description: 'Straight espresso', price: '$3.50' },
  { name: 'Terrifier Dark Roast', description: 'Bold dark roast drip', price: '$4.25' },
];

const pastryItems: MenuItem[] = [
  { name: 'Blood Moon Cake Pop', description: 'Chocolate cake pop', price: '$3.50' },
  { name: 'Graveyard Brownie', description: 'Classic fudge brownie', price: '$4' },
  { name: 'Goth Sugar Cookie', description: 'Vanilla sugar cookie', price: '$3' },
  { name: 'Midnight Croissant', description: 'Butter croissant (Costco)', price: '$3.25' },
];

function MenuColumn({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <article className="border border-[#2d2d2d] bg-[#0d0d0d] p-7">
      <h3 className="mb-6 font-[family-name:var(--font-gothic)] text-3xl uppercase tracking-[0.1em] text-[#f5f3f0]">
        {title}
      </h3>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.name} className="border-b border-[#262626] pb-4 last:border-none last:pb-0">
            <div className="flex items-baseline justify-between gap-4">
              <h4 className="text-sm uppercase tracking-[0.14em] text-[#efece7]">{item.name}</h4>
              <p className="text-xs uppercase tracking-[0.12em] text-[#afaba4]">{item.price}</p>
            </div>
            <p className="mt-2 text-sm text-[#bdbab3]">{item.description}</p>
            {item.note ? <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#8f8b84]">{item.note}</p> : null}
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="border-b border-[#242424] px-6 py-24">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#8f8b84]">Menu</p>
        <h2 className="mt-4 font-[family-name:var(--font-gothic)] text-4xl uppercase tracking-[0.08em] text-[#f5f3f0] sm:text-5xl">
          NIGHT SERVICE
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <MenuColumn title="Coffee" items={coffeeItems} />
          <MenuColumn title="Pastries" items={pastryItems} />
        </div>

        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[#8f8b84]">
          Menu items subject to seasonal rotation.
        </p>
      </div>
    </section>
  );
}
