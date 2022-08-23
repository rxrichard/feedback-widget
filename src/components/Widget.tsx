import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForms";

export function Widget() {
  // const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  // function toggleWidgetVisibility() {
  //   setIsWidgetOpen(!isWidgetOpen);
  // }

  //o Popover é um componente que abre e fecha automaticamente o que está dentro dele adicionando o aria
  return (
    //O Popover aqui é uma div
    <Popover className="absolute bottom-4 right-4 md:bottom-7 md:right-7 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      {/* {isWidgetOpen ? <p>Hello World</p> : null} */}

      {/*O Popover button é o botão ja com a acessibilidade */}
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">

        <ChatTeardropDots className="w-6 h-6 " />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear  ">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
