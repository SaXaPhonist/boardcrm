import { IAdress } from "lib/types"
import styles from './ResultsList.module.scss'

interface IProps {
    titleForSearch: string
    addressData: IAdress[] | null
}

export const ResultList = ({ addressData, titleForSearch}: IProps) => {
    return (
        <div className={styles["results-box"]}>
          <h3 className={styles["search-title"]}>{titleForSearch}</h3>
          <ul>
            {addressData && addressData.length ? (
              addressData.map(({ value, unrestricted_value, id }) => (
                <li key={id} className={styles["result-item"]}>
                  <a href={`mailto:${unrestricted_value}`}>{value}</a>
                </li>
              ))
            ) : (
              <p>Пока пусто</p>
            )}
          </ul>
        </div>
    )
}