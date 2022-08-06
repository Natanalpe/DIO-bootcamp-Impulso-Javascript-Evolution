import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarUsuarios1635635770868 implements MigrationInterface {

    public async up(QueryRunner: QueryRunner): Promise<void> {
        await QueryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'string',
                        isPrimary: true,
                        isNullable:false
                    },
                    {
                        name: 'nome',
                        type: 'string',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'string',
                        isNullable: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('usuarios')
    }
}