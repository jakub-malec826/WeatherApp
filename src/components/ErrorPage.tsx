type Props = {
  error: string;
}

export default function ErrorPage({ error }: Props) {
  return <h3>{error}</h3>;
}
