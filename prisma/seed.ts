import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Delete all existing data
    await prisma.user.deleteMany();
    await prisma.pendingList.deleteMany();
    // Create new data
    await prisma.user.create({
        data: {
            name: "Alice",
            pendingList: {
                create: [
                    {
                        notes:"list note 1",
                        test: "test 1",
                        specimen: "specimen 1",
                        patient: "patient 1",
                        status: "status 1",
                        facility: "facility 1",
                        released: "released 1",
                        assignee: "assignee 1",
                        dept: "dept 1",
                        tat: "tat 1",

                    },
                    {
                        notes:"list note 2",
                        test: "test 2",
                        specimen: "specimen 2",
                        patient: "patient 2",
                        status: "status 2",
                        facility: "facility 2",
                        released: "released 2",
                        assignee: "assignee 2",
                        dept: "dept 2",
                        tat: "tat 2",
                    },
                    
              ]
            }
        }
    }
    )
    await prisma.user.create({
        data: {
            name: "Bob",
            pendingList: {
                create: [
                    {
                        notes:"list note 4",
                        test: "test 4",
                        specimen: "specimen 4",
                        patient: "patient 4",
                        status: "status 4",
                        facility: "facility 4",
                        released: "released 4",
                        assignee: "assignee 4",
                        dept: "dept 4",
                        tat: "tat 4",

                    },
                    {
                        notes:"list note 3",
                        test: "test 3",
                        specimen: "specimen 3",
                        patient: "patient 3",
                        status: "status 3",
                        facility: "facility 3",
                        released: "released 3",
                        assignee: "assignee 3",
                        dept: "dept 3",
                        tat: "tat 3",
                    },
                    
              ]
            }
        }
    }
    )

}
        

main().then(() => {
    console.log("Data seeded");
}).catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});