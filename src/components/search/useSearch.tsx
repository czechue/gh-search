import { useRouter } from 'next/router';
import type { ChangeEventHandler, FormEventHandler} from 'react';
import { useCallback, useMemo, useState } from 'react';

export default function useSearch() {
  const router = useRouter();
  const [phrase, setPhrase] = useState(router.query['q']);
  const [validationError, setValidationError] = useState('');

  const defaultValue = router.query['q'] || '';

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault();

    setValidationError('');
    if (!phrase) {
      setValidationError('Fill the field');
      return;
    }

    void router.push({
      query: { q: phrase },
    });
  }, [phrase, router]);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setValidationError('');
    setPhrase(event.target.value);
  }, [])

  return useMemo(() => ({
    handleOnSubmit,
    handleOnChange,
    validationError,
    defaultValue
  }),[handleOnChange, handleOnSubmit, validationError, defaultValue])
}
