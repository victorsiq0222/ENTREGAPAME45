-- CreateTable
CREATE TABLE "Funcionario" (
    "id_funcionario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "telefone" TEXT,
    "email" TEXT
);

-- CreateTable
CREATE TABLE "Produto" (
    "id_produto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "descricao" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Estoque" (
    "id_estoque" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade" INTEGER NOT NULL,
    "data_entrada" DATETIME,
    "data_saida" DATETIME,
    "id_produto" INTEGER NOT NULL,
    "id_funcionario_entrada" INTEGER NOT NULL,
    "id_funcionario_saida" INTEGER NOT NULL,
    CONSTRAINT "Estoque_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto" ("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Estoque_id_funcionario_entrada_fkey" FOREIGN KEY ("id_funcionario_entrada") REFERENCES "Funcionario" ("id_funcionario") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Estoque_id_funcionario_saida_fkey" FOREIGN KEY ("id_funcionario_saida") REFERENCES "Funcionario" ("id_funcionario") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Producao" (
    "id_producao" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_producao" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "id_funcionario_responsavel" INTEGER NOT NULL,
    CONSTRAINT "Producao_id_funcionario_responsavel_fkey" FOREIGN KEY ("id_funcionario_responsavel") REFERENCES "Funcionario" ("id_funcionario") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ingrediente" (
    "id_ingrediente" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "quantidade_disponivel" INTEGER NOT NULL,
    "quantidade_minima_encomenda" INTEGER NOT NULL,
    "id_funcionario_responsavel" INTEGER NOT NULL,
    CONSTRAINT "Ingrediente_id_funcionario_responsavel_fkey" FOREIGN KEY ("id_funcionario_responsavel") REFERENCES "Funcionario" ("id_funcionario") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Checklist" (
    "id_checklist" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_criacao" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "id_funcionario_responsavel" INTEGER NOT NULL,
    CONSTRAINT "Checklist_id_funcionario_responsavel_fkey" FOREIGN KEY ("id_funcionario_responsavel") REFERENCES "Funcionario" ("id_funcionario") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_telefone_key" ON "Funcionario"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_email_key" ON "Funcionario"("email");
