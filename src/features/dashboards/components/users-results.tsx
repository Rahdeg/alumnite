"use client"
import useUserStore from '../../store/use-store'
import { UserCard } from './users-card';

export const UsersResult = () => {
  const { getUsers } = useUserStore();

  const data = getUsers();

  return (
    <div>
      {data.length === 0 && (
        <div className="text-muted-foreground text-sm">
          No user found
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data.map((result) => (
          <UserCard
            key={result.id}
            data={result}
          />
        ))}
      </div>
    </div>
  )
}
