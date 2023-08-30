export default function Conteudo(props){

    return(
        <>
            <section>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos molestias optio voluptate sed ipsam dolorum, sunt laborum molestiae nulla, animi delectus ad atque labore beatae hic, esse quaerat corporis.</p>
                </div>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, reiciendis iusto voluptas non in tenetur enim ad facere nam fugiat commodi mollitia repudiandae veniam necessitatibus, obcaecati dicta, optio repellendus blanditiis.</p>
                <p>
                    {props.novoProps}
                </p>
                <div>
                    <img src={props.uriLogoReact} alt={props.altLogoReact} />
                </div>
                </div>
            </section>
        </>
    )
}