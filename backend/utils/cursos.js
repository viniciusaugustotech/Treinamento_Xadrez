import { useEffect } from "react";

export function aplicarEstilo(classe) {
useEffect(() => {
            document.querySelectorAll(classe).forEach(tag => {
            const texto = tag.textContent.trim();

            if (texto === "Iniciante") tag.classList.add("iniciante");
            else if (texto === "Intermediário") tag.classList.add("intermediario");
            else if (texto === "Avançado") tag.classList.add("avancado");
        })
}, [])
}