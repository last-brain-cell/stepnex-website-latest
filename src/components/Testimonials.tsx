import {Container} from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
    {
      content:
        'StepNex developed a logistics management system tailored to our RMC plant, streamlining our entire supply chain. It improved efficiency and reduced delays across the board.',
      author: {
        name: 'Jitin Gupta',
        role: 'Managing Director at NDCON Constructions ',
        image: avatarImage1,
      },
    },
    {
      content:
        'Their custom solution for our water systems products and services business has streamlined our work processes, helping us manage operations seamlessly and deliver better results.',
      author: {
        name: 'Anand Chiplunkar',
        role: 'Director at Aqua Products & Services Pvt. Ltd.',
        image: avatarImage4,
      },
    },
    {
      content:
        'StepNex delivered a robust ERP system that integrated every aspect of our business. It has simplified operations and given us full control over our resources.',
      author: {
        name: 'Madhu Goel',
        role: 'Partner at Shivoha Infrastructure LLP',
        image: avatarImage5,
      },
    },
    {
      content:
        'The project management system built by StepNex has revolutionized how we handle operations, projects, and clients. Our teams are more coordinated, and projects move faster.',
      author: {
        name: 'Bishwajit Singh',
        role: 'CEO at Udyam Ventures Pvt. Ltd.',
        image: avatarImage5,
      },
    },
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            What Our Clients Are Saying?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Don’t just take our word for it—hear from the clients who’ve partnered with StepNex to transform their businesses with innovative tech solutions.
          </p>
        </div>
        <ul className="mx-auto mt-16 max-w-5xl columns-1 sm:columns-2 lg:columns-3 gap-6">
          {testimonials.map((testimonial, index) => {
            return (
                <li key={index} className="mb-6 break-inside-avoid w-full">
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <QuoteIcon className="absolute left-6 top-6 fill-slate-100"/>
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">
                        {testimonial.content}
                      </p>
                    </blockquote>
                    <figcaption
                        className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">
                          {testimonial.author.name}
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                          {testimonial.author.role}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
            );
          })}
        </ul>
      </Container>
    </section>
  )
}
