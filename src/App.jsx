import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Separator } from "./components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useState } from 'react';

export default function App () {
    const [isActive, setIsActive] = useState(false);

    const changePanels = () => {
        setIsActive(!isActive);
    }
    
    return (
        <div className="w-screen h-screen flex justify-center items-center" >
            <div className="flex items-center justify-center bg-backgroundw-1/2">
                <Card className="w-full max-w-md h-card">
                    <div className={`bg-black flex justify-center items-center w-full max-w-md h-card absolute z-10 rounded-xl ${isActive ? 'hidden' : ''}`}>
                        <Button onClick={changePanels} className="bg-green-600" >Registre-se</Button>
                    </div>
                    <CardHeader>
                        <CardTitle>Registe sua conta</CardTitle>
                        <CardDescription>Crie sua conta no nosso maravilhoso site</CardDescription>
                    </CardHeader>
                    <CardContent className="w-full max-w-md">
                        <div>
                            <Label htmlFor="emailRegis">Email</Label>
                            <Input placeholder="email" id="emailRegis" type="email" />
                        </div>
                        <div>
                            <Label htmlFor="userRegis">Usuario</Label>
                            <Input placeholder="Usuario" id="userRegis" type="text"/>
                        </div>
                        <div>
                            <Label htmlFor="passRegis">Senha</Label>
                            <Input placeholder="Senha" id="passRegis" type="password"/>
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

            <div className="flex relative items-center justify-center bg-backgroundw-1/2">
                <Card className="w-full max-w-md h-card">
                    <div className={`bg-black flex justify-center items-center w-full max-w-md h-card absolute z-20 inset-0 changePanel2 ${isActive ? '' : 'hidden'}`}>
                        <Button onClick={changePanels} className="bg-orange-600">Logar</Button>
                    </div>
  
                    <CardHeader>
                        <CardTitle>Registe sua conta</CardTitle>
                        <CardDescription>Entre com email ou nome de usuario</CardDescription>
                    </CardHeader>
                    <CardContent className="w-full max-w-md">
                        <div>
                            <Label htmlFor="enterLogin">Email/Nome de usuario</Label>
                            <Input placeholder="email" id="enterLogin" type="text" />
                        </div>
                        <div>
                            <Label htmlFor="passLogin">Senha</Label>
                            <Input placeholder="Senha" id="passLogin" type="password"/>
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
                            <Button className="p-2 rounded-full mt-2"><GitHubLogoIcon className="mr-2 px-"/>Github</Button>
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