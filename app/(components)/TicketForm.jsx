"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import WarningModal from "./WarningModal";

const TicketForm = ({ ticket, ticketsArray }) => {
  const router = useRouter();
  const EDITMODE = ticket._id === "new" ? false : true;

  const startingTicketData = {
    title: "",
    description: "",
    category: "Problema de Hardware",
    priority: 1,
    progress: 0,
    status: "Não Iniciado",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (ev) => {
    const value = ev.target.value;
    const name = ev.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "Content-Type": "application/json",
      });

      if (!res.ok) {
        setModalIsOpen(true);
        setModalMessage("Falha ao atualizar Ticket.");
        return;
      }
    } else {
      if (ticketsArray.length >= 10) {
        setModalIsOpen(true);
        setModalMessage("Não é possível criar mais Tickets. (máx: 10)");
        return;
      } else {
        const res = await fetch("/api/Tickets", {
          method: "POST",
          body: JSON.stringify({ formData }),
          "Content-Type": "application/json",
        });

        if (!res.ok) {
          setModalIsOpen(true);
          setModalMessage("Falha ao criar Ticket.");
          return;
        }
      }
    }

    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE === true ? "Atualize seu Ticket" : "Crie seu Ticket"}</h3>

        <label htmlFor="title">Título</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          value={formData.title}
          required
        />

        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          value={formData.description}
          rows={5}
          required
        />

        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Problema de Hardware">Problema de Hardware</option>
          <option value="Problema de Software">Problema de Software</option>
          <option value="Projeto">Projeto</option>
        </select>

        <label htmlFor="priority">Prioridade</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label htmlFor="priority-1">1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label htmlFor="priority-2">2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label htmlFor="priority-3">3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label htmlFor="priority-4">4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label htmlFor="priority-5">5</label>
        </div>

        <label htmlFor="progress">Progresso</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min={0}
          max={100}
          onChange={handleChange}
        />

        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Não Iniciado">Não Iniciado</option>
          <option value="Iniciado">Iniciado</option>
          <option value="Terminado">Terminado</option>
        </select>

        <input
          type="submit"
          className="btn"
          value={EDITMODE === true ? "Atualizar Ticket" : "Criar Ticket"}
        />
      </form>
      <WarningModal isOpen={modalIsOpen} message={modalMessage} />
    </div>
  );
};

export default TicketForm;
