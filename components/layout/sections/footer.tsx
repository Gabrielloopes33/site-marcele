import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl flex flex-col items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8 w-full justify-center justify-items-center">
          <div className="col-span-full xl:col-span-2 flex justify-center">
            <Link href="#" className="flex items-center justify-center">
              <img
                src="/logo-01.png" // coloque o caminho do seu logo aqui
                alt="Logo"
                className="h-12 w-auto" // ajuste o tamanho conforme necessário
              />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Redes Sociais</h3>
            <div>
              <Link
                href="https://www.instagram.com/dra.marcele.portella/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100"
              >
                Instagram
              </Link>
            </div>
            <div>
              <Link
                href="https://www.facebook.com/dramarceleportella"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100"
              >
                Facebook
              </Link>
            </div>
            <div>
              <Link
                href="https://api.whatsapp.com/send?phone=553333312600&text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20consulta%20com%20a%20Dra.Marcele&utm_medium=social&utm_source=heylink.me"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100"
              >
                Whatsapp
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 Designed and developed by
            <Link
              target="_blank"
              href="https://github.com/Gabrielloopes33"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Agência Touch
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
