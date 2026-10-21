import { useEffect } from "react";

export function aplicarEstilo() {
useEffect(() => {
            document.querySelectorAll(".tag").forEach(span => {
            const texto = span.textContent.trim();

            if (texto === "Iniciante") span.classList.add("iniciante");
            else if (texto === "Intermediário") span.classList.add("intermediario");
            else if (texto === "Avançado") span.classList.add("avancado");
        })
}, [])
}