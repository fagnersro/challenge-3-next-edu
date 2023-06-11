/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `transactions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "transactions_description_key" ON "transactions"("description");
