import request from "supertest";
import express from "express";
import { jest } from "@jest/globals";

jest.unstable_mockModule("../../services/actorService.js", () => ({
  default: {
    findActor: jest.fn(),
    createActor: jest.fn(),
    updateActor: jest.fn(),
    deleteActor: jest.fn(),
  },
}));

const { default: db } = await import("../../services/actorService.js");
const { default: actorRoutes } = await import("../../routes");

const app = express();
app.use(express.json());
app.use("/", actorRoutes);

describe("GET /ator", () => {
  test("Deve retornar status 200 e a lista de atores", async () => {
    const mockActors = [
      { id: 1, nome: "Wagner Moura", sexo: "M", dt_nascimento: "1976-08-20" },
      { id: 2, nome: "Selton Mello", sexo: "M", dt_nascimento: "1956-10-04" },
    ];

    db.findActor.mockResolvedValue(mockActors);

    const response = await request(app).get("/ator");
    // console.log(response.body)
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockActors);
  });

  test("Deve retornar status 204 quando a lista estiver vazia", async () => {
    db.findActor.mockResolvedValue([]);

    const response = await request(app).get("/ator");

    expect(response.status).toBe(204);
  });

  test("Deve retornar status 500 em caso de erro no serviço", async () => {
    db.findActor.mockRejectedValue(new Error("Erro de conexão"));

    const response = await request(app).get("/ator");

    expect(response.status).toBe(500);
    expect(response.body.message).toContain("Encontramos um erro");
  });
});

describe("POST /ator", () => {
  test("Deve retornar status 201 em caso de um novo usuário cadastrado", async () => {
    const mockActor = [
      { nome: "John Stamos", sexo: "M", dt_nascimento: "1965-08-21" },
    ];

    db.createActor.mockResolvedValue(mockActor);
    const response = await request(app).post("/ator");

    expect(response.status).toBe(201);
    expect(response.body.message).toEqual("Ator salvo com sucesso");
  });
});

describe("DELETE /ator/:id", () => {
  test("Deve retornar 204 em caso de usuário excluído", async () => {
    db.deleteActor.mockResolvedValue(undefined);
    const response = await request(app).delete(`/ator/10`);

    expect(response.status).toBe(204);
    expect(db.deleteActor).toHaveBeenCalledWith("10");
  });
});
