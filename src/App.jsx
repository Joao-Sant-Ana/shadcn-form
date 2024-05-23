import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Separator } from "./components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function App () {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex items-center justify-center bg-backgroundw-1/2">
                <Card className="w-full max-w-md h-card">
                    <CardHeader>
                        <CardTitle>Registe sua conta</CardTitle>
                        <CardDescription>Crie sua conta no nosso maravilhoso site</CardDescription>
                    </CardHeader>
                    <CardContent className="w-full max-w-md">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input placeholder="email" id="email" type="email" />
                        </div>
                        <div>
                            <Label htmlFor="user">Usuario</Label>
                            <Input placeholder="Usuario" id="user" type="text"/>
                        </div>
                        <div>
                            <Label htmlFor="pass">Senha</Label>
                            <Input placeholder="Senha" id="pass" type="password"/>
                        </div>
                        <Button className="mt-6 w-full">Registrar</Button>

                        <div className="flex items-center gap-6 mt-4">
                            <div className="flex-grow">
                                <Separator />
                            </div>
                            <span className="text-xs text-muted-foreground">Ou</span>
                            <div className="flex-grow">
                                <Separator />
                            </div>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Button className="p-2 rounded-full mt-2"><GitHubLogoIcon className="mr-2"/>Github</Button>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <p className="text-muted-forrground text-center text-sm">Ao entrar na nossa plataforma você concorda com nossos termos de uso e politica de privacidade</p>
                    </CardFooter>
                </Card>
            </div>
            <div className="flex items-center justify-center bg-backgroundw-1/2">
                <Card className="w-full max-w-md h-card">
                    <CardHeader>
                        <CardTitle>Registe sua conta</CardTitle>
                        <CardDescription>Entre com email ou nome de usuario</CardDescription>
                    </CardHeader>
                    <CardContent className="w-full max-w-md">
                        <div>
                            <Label htmlFor="enter">Email/Nome de usuario</Label>
                            <Input placeholder="email" id="enter" type="text" />
                        </div>
                        <div>
                            <Label htmlFor="pass">Senha</Label>
                            <Input placeholder="Senha" id="pass" type="password"/>
                        </div>
                        <Button className="w-full mt-6">Logar</Button>

                        <div className="flex items-center gap-6 mt-4">
                            <div className="flex-grow">
                                <Separator />
                            </div>
                            <span className="text-xs text-muted-foreground">Ou</span>
                            <div className="flex-grow">
                                <Separator />
                            </div>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Button className="p-2 rounded-full mt-2"><GitHubLogoIcon className="mr-2"/>Github</Button>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <p className="text-muted-forrground text-center text-sm">Ao entrar na nossa plataforma você concorda com nossos termos de uso e politica de privacidade</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}