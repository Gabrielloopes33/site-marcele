"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Web Development",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contato
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold">Agende sua avaliação!</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Quer tirar dúvidas, agendar uma consulta ou saber qual o melhor tratamento para o seu caso? <br /> <br/> 
            Preencha o formulário ao lado ou escolha uma das formas de contato abaixo. <b>Nossa equipe terá o maior prazer em te atender com atenção e cuidado.</b>
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 mb-1">
                <Building2 />
                <div className="font-bold">Endereço</div>
              </div>

              <div>R. Prof. Manoel do Carmo, 108 - Centro, Manhuaçu</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Phone />
                <div className="font-bold">Telefone</div>
              </div>

              <div>(33) 3331-2600</div>
            </div>

            <div>
              <div className="flex gap-2">
                <Clock />
                <div className="font-bold">Horário de Atendimento</div>
              </div>

              <div>
                <div>Segunda à Sexta</div>
                <div>8h - 18h</div>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:!flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Renata" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Sobrenome</FormLabel>
                        <FormControl>
                          <Input placeholder="Miranda" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="renatamiranda@gmail.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Procedimento</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o procedimento" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Oftalmologia">
                              Oftalmologia
                            </SelectItem>
                            <SelectItem value=" Cirurgia de pálpebras">
                               Cirurgia de pálpebras
                            </SelectItem>
                            <SelectItem value="Endolaser">
                              Endolaser
                            </SelectItem>
                            <SelectItem value="Toxina botulínica (botox)">Toxina botulínica (botox)</SelectItem>
                            <SelectItem value="Preenchimento">
                              Preenchimento
                            </SelectItem>
                            <SelectItem value=" Ultrassom microfocado">
                               Ultrassom microfocado
                            </SelectItem>
                            <SelectItem value="  Fios de PDO">
                                Fios de PDO
                            </SelectItem>
                            <SelectItem value="  Bioestimulador injetável">
                                Bioestimulador injetável
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Menssagem</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Digite aqui sua mensagem"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button className="mt-4">Enviar mensagem</Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
