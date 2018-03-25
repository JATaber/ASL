<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180325172441 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE login ADD username VARCHAR(254) NOT NULL, CHANGE password password VARCHAR(64) NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_AA08CB10E7927C74 ON login (email)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_AA08CB10F85E0677 ON login (username)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX UNIQ_AA08CB10E7927C74 ON login');
        $this->addSql('DROP INDEX UNIQ_AA08CB10F85E0677 ON login');
        $this->addSql('ALTER TABLE login DROP username, CHANGE password password VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci');
    }
}
