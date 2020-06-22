import { Firestore } from "@google-cloud/firestore";

const firestore = new Firestore({
  port: 4500,
  projectId: "test",
  servicePath: "localhost",
  ssl: false,
});

it("should work", async (): Promise<void> => {
  const ref = firestore.collection("test").doc();

  await ref.create({ foo: "foo" });

  const read = await ref.get();

  expect(read.exists).toStrictEqual(true);
  expect(read.data()).toStrictEqual({ foo: "foo" });
});
