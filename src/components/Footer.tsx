import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex md:px-32 lg:px-48 xl:px-64 justify-between">
              <NavLink href="#features">
                <b>Services</b>
              </NavLink>
              <NavLink href="#secondary-features">
                <b>Expertise</b>
              </NavLink>
              <NavLink href="#get-started-today">
                <b>Contact</b>
              </NavLink>
              <NavLink href="#testimonials">
                <b>Testimonials</b>
              </NavLink>
              <NavLink href="/careers">
                <b>Careers</b>
              </NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} StepNex Technologies
            Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
