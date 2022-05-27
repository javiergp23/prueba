import React from 'react';
import { useForm } from 'react-hook-form';

const ListaPessoas = () => {

    const { registe, handleSubmit } = useForm();
    
    
    const onSubmit = (data) => {
        console.log(data)
    }

    const incluirRegistros = watch('incluirRegistros');

  return (
    <div>
       <div>
           <h2>Maria</h2>
           <button type='text'>Novo registro</button>
           <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Nombre</label>
              <input type="text" {...register('nombre', {
                required: true,
                maxLength: 30
              })} />
              {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
            </div>
            <div>
              <label>Direccion</label>
              <input type="text" {...register('direccion')} />
            </div>
            <div>
              <label>Edad</label>
              <input type="text" {...register('edad', {
                validate: edadValidator
              }) }
               />
               {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
            </div>
            <div>
              <label>Email</label>
              <input type="text" {...register('email', 
               { pattern: /^[^\s@]+@[^\s@]+\.[^?s@]+$/i }
              )} />
              { errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>
            <div>
            <label>Pais</label>
            <select {...register('pais')}>
              <option value="it">italia</option>
              <option value="es">España</option>
              <option value="ve">Venezuela</option>
            </select>
          </div>
          <div>
            <label>Incluir telefono?</label>
            <input type="checkbox" {...register('incluirTelefono')} />
          </div>
          { incluirTelefono && (
            <div>
              <label>telefono</label>
              <input type="text" {...register('Telefono')} />
            </div>
          )}
          <input type="submit" value="Enviar"/>
        </form>
        </div>   
    </div>
  )
}

export default ListaPessoas;