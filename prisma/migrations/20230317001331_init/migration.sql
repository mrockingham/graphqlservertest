-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PendingList" (
    "id" SERIAL NOT NULL,
    "notes" TEXT NOT NULL,
    "test" TEXT NOT NULL,
    "specimen" TEXT NOT NULL,
    "patient" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "facility" TEXT NOT NULL,
    "released" TEXT NOT NULL,
    "assignee" TEXT NOT NULL,
    "dept" TEXT NOT NULL,
    "tat" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PendingList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PendingList" ADD CONSTRAINT "PendingList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
