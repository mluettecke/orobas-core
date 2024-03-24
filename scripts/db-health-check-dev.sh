#!/bin/sh

# Source the environment variables from .env.prod
. .env.dev

# Perform the health check using the sourced environment variables
pg_isready -d "$POSTGRES_DB" -U "$POSTGRES_USER"