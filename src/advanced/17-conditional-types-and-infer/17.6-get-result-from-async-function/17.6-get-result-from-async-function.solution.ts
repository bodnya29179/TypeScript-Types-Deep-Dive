import { Equal, Expect } from '../../../helpers';

const getServerSideProps = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json: { title: string } = await data.json();

  return {
    props: {
      json,
    },
  };
};

/*
 * TODO: Extract the `props` type from the getServerSideProps() function return type.
 */
type InferPropsFromServerSideFunction<TFunction> = TFunction extends (...args: any) => Promise<{ props: infer TProps }>
  ? TProps
  : never;


/* Test the result */
type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >
];
